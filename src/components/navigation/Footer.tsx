export default function Footer() {
  return (
    <div>
      <footer className="py-8 border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Balbader.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
