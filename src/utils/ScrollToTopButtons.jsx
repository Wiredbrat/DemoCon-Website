import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="z-[200] fixed bottom-5 right-5 p-3 h-12 w-12 flex justify-center items-center rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
      >
        <i className="fas fa-chevron-up text-xl text-white"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;