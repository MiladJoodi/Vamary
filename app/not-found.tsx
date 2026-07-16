import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-medium text-accent">404</p>
      <h1 className="mt-2 text-xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The address you entered doesn’t exist or has been moved.
      </p>
      <div className="mt-5 flex gap-2">
        <Button href="/" size="sm">
          Back to home
        </Button>
        <Button href="/contact" size="sm" variant="outline">
          Contact
        </Button>
      </div>
      <Link href="/services" className="mt-4 text-xs text-muted hover:text-accent">
        View services
      </Link>
    </Container>
  );
}
