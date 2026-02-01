"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Users, BookOpen, MapPin, Mail } from "lucide-react";
import styles from "../../../styles/animations/AnimatedMenuOverlay.module.css";

interface AnimatedMenuOverlayProps {
  onClose: () => void;
  scrollToSection: (id: string) => void;
  navLinks: { href: string; label: string }[];
  activeSection: string;
}

/* Mapeo de íconos por sección */
const iconMap: Record<string, React.ReactNode> = {
  "#Inicio": <Home size={22} />,
  "#Quienes Somos": <Users size={22} />,
  "#Qué hacemos": <BookOpen size={22} />,
  "#Cómo participar": <MapPin size={22} />,
  "#Contacto": <Mail size={22} />,
};

const AnimatedMenuOverlay: React.FC<AnimatedMenuOverlayProps> = ({
  onClose,
  scrollToSection,
  navLinks,
  activeSection,
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 400);
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.menuOverlayContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.nav
            className={styles.animatedMenu}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            aria-label="Menú principal"
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Cerrar menú"
            >
              <X size={32} />
            </button>

            <div className={styles.menuItemsContainer}>
              {navLinks.map(({ href, label }, index) => (
                <motion.button
                  key={href}
                  onClick={() => {
                    scrollToSection(href);
                    handleClose();
                  }}
                  className={`${styles.menuItem} ${
                    activeSection === href ? styles.activeItem : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <span className={styles.icon}>
                    {iconMap[href] ?? <BookOpen size={22} />}
                  </span>
                  <span className={styles.label}>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default AnimatedMenuOverlay;
