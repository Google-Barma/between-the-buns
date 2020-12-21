import './Section.css';

export default function Section({ name, children }) {
  return <section className={name}>{children}</section>;
}
