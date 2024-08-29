import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroCursorProps {
  children: React.ReactNode;
  opacityDelay: number;
  opacityDuration: number;
  animate?: { [key: string]: any };
}

function CustomCursor({ children, opacityDelay, opacityDuration, animate }: IntroCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
   position.x != 0 && position.y != 0 && (
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: 1,
          ...animate
        }}
        transition={{
          opacity: { duration: opacityDuration, delay: opacityDelay }
        }}
      >
        {children}
      </motion.div>
   )
  );
}

export default CustomCursor;