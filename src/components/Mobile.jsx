import Link from "next/link";

export default function Mobile() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex items-center justify-center gap-y-6">
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Home
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            About
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Contact
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Agents
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            SignIn
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            SignUp
          </Link>
        </li>
      </label>
    </ul>
  );
}
