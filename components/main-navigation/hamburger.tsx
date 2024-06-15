import { cn } from "@/lib/utils";

const Hamburger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={setIsOpen}
      className={cn(
        "c-hamburger c-hamburger--stack z-[60]",
        isOpen && "active",
      )}
    >
      <div className="c-hamburger-inner">
        <span className="c-hamburger-bar"></span>
        <span className="c-hamburger-bar"></span>
        <span className="c-hamburger-bar"></span>
      </div>
    </button>
  );
};

export default Hamburger;
