const logos = [
  "runRafi", "Testinium", "Loadium",
  "Oobeya", "Experilabs", "theRafi", "hiRafi",
];

const LogoStripSection = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container">
        <p className="text-center text-xs font-semibold tracking-[2px] uppercase text-muted-foreground/60 mb-8">
          Türkiye'nin önde gelen kurumları <span className="text-foreground">İKE</span>'yi tercih ediyor
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-10"
            >
              <span className="text-xl font-bold text-muted-foreground/20 hover:text-muted-foreground/40 transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStripSection;
