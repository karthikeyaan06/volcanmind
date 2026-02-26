interface TeaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const TeaButton = ({ children, variant = "primary" }: TeaButtonProps) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-green-700 text-white hover:bg-green-800"
      : "bg-white text-gray-800 hover:bg-gray-200";

  return <button className={`${baseStyle} ${styles}`}>{children}</button>;
};

export default TeaButton;