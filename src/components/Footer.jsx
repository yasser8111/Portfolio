export default function Footer({ text }) {
  return (
    <footer className="py-8 mt-12 border-t border-slate-200 flex justify-center items-center">
      <p className="text-slate-500 font-medium text-sm tracking-wide">
        &copy; {new Date().getFullYear()} {text}
      </p>
    </footer>
  );
}
