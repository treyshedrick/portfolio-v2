import { motion } from "framer-motion";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const OrchestrationContainer = ({children}) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
        >
            {children}
        </motion.div>
    );
};

export default OrchestrationContainer;