"use client";

import Image from "next/image";
import { Play, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  screenshot?: string;
  videoId?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ProjectMedia({
  name,
  screenshot,
  videoId,
  priority = false,
  sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1184px) 55vw, 616px",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (playing) closeRef.current?.focus();
  }, [playing]);
  const stop = () => {
    setPlaying(false);
    requestAnimationFrame(() => playRef.current?.focus());
  };
  return (
    <div className="media-group">
      <div className="project-media">
        {playing && videoId ? (
          <div className="video-player">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={`${name} demo video`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <button
              ref={closeRef}
              className="video-close"
              onClick={stop}
              aria-label={`Close ${name} video`}
            >
              <X size={16} /> Close video
            </button>
          </div>
        ) : (
          <>
            {screenshot && (
              <Image
                src={`/screenshots/${screenshot}`}
                alt={`${name} interface preview`}
                fill
                sizes={sizes}
                preload={priority}
                className="project-image"
              />
            )}
            {videoId && (
              <button
                ref={playRef}
                className="video-trigger"
                aria-label={`Watch ${name} demo`}
                onClick={() => setPlaying(true)}
              >
                <span className="play-icon">
                  <Play size={19} fill="currentColor" />
                </span>
                <span>Watch demo</span>
              </button>
            )}
          </>
        )}
      </div>
      {videoId && (
        <a
          className="video-fallback"
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch {name} on YouTube <ArrowUpRight size={13} />
        </a>
      )}
    </div>
  );
}
