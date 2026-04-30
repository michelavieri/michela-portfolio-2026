'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
interface SectionLabelProps {
    label: string;
}
export function SectionLabel({ label }: SectionLabelProps) {
    return (
        <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-xs text-muted-foreground font-semibold tracking-widest uppercase mb-8"
        >
            {label}
        </motion.p>
    );
}