export const textVariant = (delay:any) => ({
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  });
  
  export const fadeIn = (direction:any, type:any, delay:any, duration:any) => {
    const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
    const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;
  
    return {
      hidden: { x, y, opacity: 0 },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay:any, duration:any) => ({
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  
  export const slideIn = (direction:any, type:any, delay:any, duration:any) => {
    const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
    const y = direction === "up" ? "100%" : direction === "down" ? "100%" : 0;
  
    return {
      hidden: { x, y },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren:any, delayChildren:any) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  });
  