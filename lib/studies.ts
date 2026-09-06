export type Study = {
  slug: string;
  summary: string;
  scope: string;
  problem: string;
  approach: string;
  decisions: { title: string; detail: string; tradeoff: string }[];
  capabilities: string[];
  nextQuestion: string;
  attribution?: string;
  sources: { label: string; url: string }[];
};

export const studies: Study[] = [
  {
    slug: "tripsync",
    summary:
      "Helping a group turn different travel preferences into a plan everyone can discuss.",
    scope: "Preference collection, AI proposals, and collaborative voting",
    problem:
      "A group trip starts with competing budgets, interests, and deal-breakers. In a chat thread, those preferences are hard to compare, and a single person often ends up assembling the plan.",
    approach:
      "TripSync makes the preferences explicit before generating an itinerary. A shared link gathers everyone's input, Gemini proposes three directions, and the group votes on individual activities.",
    decisions: [
      {
        title: "Collect preferences before generating a plan",
        detail:
          "The joining flow asks for budget, travel style, interests, and deal-breakers. That gives proposal generation structured input from the group.",
        tradeoff:
          "A form adds an up-front step, but gives the group something more concrete to work from than a free-form chat.",
      },
      {
        title: "Offer three directions, then refine",
        detail:
          "Budget, balanced, and experience-focused proposals expose different ways of satisfying the same preferences. Per-member match scores make those differences visible.",
        tradeoff:
          "Comparing proposals takes more attention than accepting a single answer. It also keeps the choice with the group instead of hiding it inside the AI output.",
      },
      {
        title: "Vote at the activity level",
        detail:
          "Activity votes and comments let participants keep the useful parts of a proposal and feed targeted feedback into refinement.",
        tradeoff:
          "Fine-grained voting creates more decisions to manage, but avoids rejecting an entire itinerary over one activity.",
      },
    ],
    capabilities: [
      "Create a trip and invite participants with a shareable link.",
      "Compare three generated proposals and vote on activities.",
      "Refine the itinerary with feedback and export the finalized plan to PDF.",
    ],
    nextQuestion:
      "Does structured preference collection reduce the number of coordination rounds before a group agrees on a trip? That is the outcome to measure next.",
    sources: [
      {
        label: "TripSync features and setup",
        url: "https://github.com/akshvaishnav21/tripsync#readme",
      },
    ],
  },
  {
    slug: "learntube",
    summary:
      "Turning bookmarked videos into a learning path you can return to.",
    scope: "Learning workflows added to the NewPipe Android client",
    problem:
      "Saving a useful playlist is easy. Keeping track of where you left off, what you learned, and what to watch next takes a separate system.",
    approach:
      "LearnTube extends NewPipe with a learning layer: playlist progress, timestamped notes, learning streaks, and study-time summaries. The existing player remains the foundation.",
    decisions: [
      {
        title: "Build on an established player",
        detail:
          "NewPipe supplies playback, subscriptions, downloads, and account-free access. The additions focus on organizing and returning to learning material.",
        tradeoff:
          "Reusing the player makes the learning workflow the focus, while creating an ongoing need to stay compatible with upstream changes.",
      },
      {
        title: "Make playlists the learning unit",
        detail:
          "Bookmarked playlists become learning paths. Each path shows watched-video progress, with manual and bulk controls for marking videos watched or unwatched.",
        tradeoff:
          "Manual controls let a learner correct their progress, but watched status alone cannot establish understanding.",
      },
      {
        title: "Keep notes close to the moment",
        detail:
          "A note can be anchored to the current playback position. Notes appear in timestamp order and can seek the player back to that point.",
        tradeoff:
          "Video-linked notes are convenient to revisit, while broader synthesis across several videos remains a separate learning task.",
      },
    ],
    capabilities: [
      "Review active paths, completed paths, and weekly study hours from a dashboard.",
      "Mark or reset watch progress for individual videos or whole playlists.",
      "Create timestamped notes and return to the corresponding moment in a video.",
    ],
    nextQuestion:
      "Do the progress and note-taking tools help learners return to unfinished paths? Completion and repeat use would be more useful evidence than watch time alone.",
    attribution:
      "LearnTube is an independent fork of NewPipe, created by TeamNewPipe and its contributors. Playback and the inherited client features come from that project. LearnTube adds the learning features described here and retains the GPL-3.0-or-later license. It is not affiliated with or endorsed by TeamNewPipe.",
    sources: [
      {
        label: "LearnTube learning features",
        url: "https://github.com/akshvaishnav21/LearnTube#readme",
      },
      {
        label: "NewPipe upstream project",
        url: "https://github.com/TeamNewPipe/NewPipe",
      },
    ],
  },
  {
    slug: "save-your-tokens",
    summary: "Reducing repetitive command output in an AI coding workflow.",
    scope: "Go CLI proxy, command filters, hooks, and local usage tracking",
    problem:
      "Build logs, successful tests, and package-install progress can produce a lot of text. In an AI coding session, that output consumes context even when the useful information is a failure or a short summary.",
    approach:
      "SaveYourTokens sits between Claude Code and shell commands. A PreToolUse hook rewrites supported commands through a Go proxy, which filters their output and logs token-saving estimates locally in SQLite.",
    decisions: [
      {
        title: "Fit into an existing command workflow",
        detail:
          "The hook routes commands through the proxy automatically after setup. Filters can also be invoked manually, and a discover command identifies commands that are not going through the proxy.",
        tradeoff:
          "Automatic routing removes a repeated manual step, but makes predictable command behavior and straightforward uninstalling especially important.",
      },
      {
        title: "Filter by command rather than summarize with another model",
        detail:
          "Command-specific filters strip repetitive progress and passing output, while keeping failures, errors, and summary lines.",
        tradeoff:
          "Rules can be fast and local, but need maintenance as tools change their output formats. Useful diagnostics must not be lost.",
      },
      {
        title: "Keep a path back to raw output",
        detail:
          "On failures, the default tee mode saves the raw output for inspection. A local SQLite log supports history, daily breakdowns, and a savings dashboard.",
        tradeoff:
          "Saved logs improve diagnosability, but also need bounded retention and file-size limits. The configuration exposes these controls.",
      },
    ],
    capabilities: [
      "Install or uninstall the command hook and run supported filters manually.",
      "Inspect savings estimates with summary, daily, history, graph, or JSON output.",
      "Inspect saved raw output after a command failure.",
    ],
    nextQuestion:
      "How much context does this save on a representative coding task while preserving every diagnostic needed to fix failures? Savings vary by command and output; no single reduction percentage is asserted here.",
    sources: [
      {
        label: "SaveYourTokens behavior and configuration",
        url: "https://github.com/akshvaishnav21/save-your-tokens#readme",
      },
    ],
  },
];
