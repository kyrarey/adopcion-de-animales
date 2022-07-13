import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import s from "./SingleSlider.module.css";


const SingleSlider = ({ images }) => {

  /* console.log("IMAGES", images)
  console.log("TYPEOF IMAGES:", typeof images) */

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
      };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);    

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
       <div className={s.sliderBody}> 
            <AnimatePresence className={s.container} initial={false} custom={direction}>
                <motion.img className={s.img}
                key={page}
                src={images[0] && require(`../../assets/img/pets${images[imageIndex]}`) }
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                    }
                }}
                />
            </AnimatePresence>
            <div className={s.next} onClick={() => paginate(1)}>{"‣"}</div>
            <div className={s.prev} onClick={() => paginate(-1)}>{"‣"}</div>
      </div>
    )
}

export default SingleSlider;

