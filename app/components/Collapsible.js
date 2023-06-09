'use client';

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Collapsible({
  title,
  children,
  startOpen = true,
  containerClasses = "w-12/12 mx-auto my-4 p-4 border border-gray-500 rounded-sm flex flex-col",
}) {
  const [isOpen, setIsOpen] = useState(startOpen);
  const [height, setHeight] = useState(startOpen ? undefined : 0);
  const contentRef = useRef();

  // set height of the virtual container to be the height of the content when collapsible is open, 0 when closed
  useEffect(() => {
    if (isOpen) setHeight(contentRef.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  // set height of the virtual container to be the height of the content when the content changes size
  useEffect(() => {
    if (!height || !isOpen || !contentRef.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(contentRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  return (
    <div className={containerClasses}>
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
                <FaChevronCircleUp className="text-2xl text-pink-600 cursor-pointer" />
                ) : (
                <FaChevronCircleDown className="text-2xl text-pink-600 cursor-pointer" />
                )
            }  
        </div>
      </div>
      <div className="h-0 overflow-hidden transition ease-in-out duration-500" style={{ height }}>
        <div ref={contentRef} className="mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
