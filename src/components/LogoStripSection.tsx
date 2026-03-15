const logos = [
  "runRafi", "Testinium", "Loadium",
  "Oobeya", "Experilabs", "theRafi", "hiRafi",
];

const LogoStripSection = () => {
  return (
    <section className="py-10 bg-background border-b border-border">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Türkiye'nin önde gelen kurumları erişilebilirlik için <span className="font-semibold text-foreground">İKE</span>'yi tercih ediyor
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {logos.map((name) => (
            <div
              key={name}
              className="text-lg font-bold text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStripSection;
