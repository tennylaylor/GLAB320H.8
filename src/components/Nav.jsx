import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}
