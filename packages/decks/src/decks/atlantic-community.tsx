import { LogoGrid } from "@repo/ui/components/logo-grid";
import {
  avatarPlaceholder,
  logoPlaceholder,
  photoPlaceholder,
} from "@repo/ui/components/placeholders";
import { SlideLink } from "@repo/ui/components/slide-link";
import { SlideText } from "@repo/ui/components/slide-text";
import { LogoWallSlide } from "@repo/ui/layouts/logo-wall-slide";
import { PeopleSlide } from "@repo/ui/layouts/people-slide";
import { SideBySideSlide } from "@repo/ui/layouts/side-by-side-slide";
import { StatementSlide } from "@repo/ui/layouts/statement-slide";
import { ThreeColumnSlide } from "@repo/ui/layouts/three-column-slide";
import { TitleBodyImageSlide } from "@repo/ui/layouts/title-body-image-slide";
import { TitleBodyImageStackSlide } from "@repo/ui/layouts/title-body-image-stack-slide";

import { brandCover } from "../shared/cover";
import { contactClosing } from "../shared/closing";
import { type Deck } from "../types";

const team = [
  { name: "Jorge Teixeira", src: avatarPlaceholder("JT", 0) },
  { name: "Santiago Saavedra", src: avatarPlaceholder("SS", 1) },
  { name: "Brais Arias", src: avatarPlaceholder("BA", 2) },
  { name: "Bruno Cabado", src: avatarPlaceholder("BC", 3) },
  { name: "Pablo Castro", src: avatarPlaceholder("PC", 4) },
  { name: "Pablo Cancelo", src: avatarPlaceholder("PC", 5) },
  { name: "Álvaro Freire", src: avatarPlaceholder("AF", 6) },
];

const sponsorNames = [
  "Google",
  "NVIDIA",
  "Intel",
  "arm",
  "AMD",
  "Valve",
  "Canonical",
  "Red Hat",
  "Collabora",
  "WordPress",
  "okta",
  "Inditex Tech",
];

const supporterNames = [
  "aesia",
  "OpositaTest",
  "Coruña Tech",
  "Startup Galicia",
  "denodo",
  "Inditex Tech",
  "ExpoCoruña",
  "Universidade da Coruña",
  "AGASOL",
];

export const atlanticCommunity: Deck = {
  meta: {
    id: "atlantic-community",
    title: "The Atlantic Community",
    subtitle: "Making Galicia the next European tech hub",
    date: "June 2026",
  },
  slides: [
    brandCover({
      title: "The Atlantic Community",
      subtitle: "Making Galicia the next European tech hub",
      location: "A Coruña, Spain",
      email: "sponsor@1hack.eu",
    }),

    <PeopleSlide
      key="who"
      title="¿Quienes somos?"
      lead="+20 años posicionando a Galicia en tecnología"
      people={team}
      rows={[2, 3, 2]}
    >
      <SlideText size="sm" muted>
        Un equipo de referentes en la comunidad tech gallega, con más de 20 años
        de experiencia en la organización de eventos nacionales e
        internacionales.
      </SlideText>
      <SlideText size="sm" muted>
        Hemos trabajado en la creación de comunidades, con una amplia red de
        contactos en el ámbito tech y entre investigadores de toda Europa.
      </SlideText>
      <SlideText size="sm" muted>
        Además, contamos con experiencia fundando y vendiendo startups a
        empresas cotizadas en el Nasdaq, así como con múltiples conexiones con
        inversores.
      </SlideText>
    </PeopleSlide>,

    <ThreeColumnSlide
      key="events"
      title="Nuestros eventos"
      columns={[
        {
          heading: "GUADEC/Akademy/XDC",
          stats: (
            <>
              5 ediciones (2 + 1 + 2)
              <br />
              ~200 desarrolladores en cada evento
            </>
          ),
          body: "Conferencias internacionales de comunidades open source y con profesionales referencia en su campo.",
          image: { src: photoPlaceholder(0), alt: "Open source conference" },
        },
        {
          heading: "AtlánticaConf",
          link: <SlideLink href="https://atlanticaconf.com" />,
          stats: (
            <>
              3 ediciones
              <br />
              +400 profesionales senior
            </>
          ),
          body: "La mayor conferencia de desarrollo del noroeste de España que da visibilidad a lo que se hace en Galicia.",
          image: { src: photoPlaceholder(1), alt: "Conference audience" },
        },
        {
          heading: "HackUDC",
          link: <SlideLink href="https://hackudc.gpul.org" />,
          stats: (
            <>
              4 ediciones
              <br />
              500 estudiantes
            </>
          ),
          body: "El segundo hackathon universitario más grande de España con estudiantes nacionales e internacionales.",
          image: { src: photoPlaceholder(2), alt: "Hackathon" },
        },
      ]}
    />,

    <SideBySideSlide
      key="sponsors"
      title="Sponsors internacionales que ya han confiado en nosotros"
      body={
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <SlideText size="sm">
            Sponsors que han trabajado con nosotros en los diferentes eventos,
            tanto locales como de comunidades open source globales como Gnome,
            KDE o la X.org Foundation.
          </SlideText>
          <SlideText size="sm">
            Eventos con los mejores profesionales del mundo, organizados en
            lugares como las oficinas principales de Google en Mountain View.
          </SlideText>
        </div>
      }
      right={
        <LogoGrid
          logos={sponsorNames.map((name, i) => ({
            src: logoPlaceholder(name, i),
            alt: name,
          }))}
          columns={3}
          gap={24}
          cellHeight={116}
          logoHeight={46}
        />
      }
    />,

    <TitleBodyImageSlide
      key="hub"
      title="Galician european tech hub"
      image={{ src: photoPlaceholder(3), alt: "Galician tech community" }}
    >
      <SlideText size="sm">
        Tenemos talento enorme y buena formación, nada que envidiar a otros
        ecosistemas del mundo.
      </SlideText>
      <SlideText size="sm">
        En Galicia hacemos cosas top, tanto empresas como profesionales.
        Creámoslo y contémoslo al mundo.
      </SlideText>
      <SlideText size="sm">
        Relacionar el talento para generar negocio e inversión. Y atraerlo de
        fuera.
      </SlideText>
      <SlideText size="sm">
        Liderar haciendo las cosas con alta calidad y sentidiño: soberanía
        tecnológica, IA open source.
      </SlideText>
    </TitleBodyImageSlide>,

    <StatementSlide key="next-level">
      Queremos ir al siguiente nivel
    </StatementSlide>,

    <TitleBodyImageStackSlide
      key="1hack"
      title="1hack"
      link={<SlideLink href="https://hackudc.gpul.org" tone="white" />}
      images={[
        { src: photoPlaceholder(0, 800, 500), alt: "Hackathon venue at night" },
        { src: photoPlaceholder(1, 800, 500), alt: "Teams hacking on stage" },
      ]}
    >
      <SlideText size="sm" bold>
        800 asistentes
        <br />
        Patrocinadores top
      </SlideText>
      <SlideText size="sm" muted>
        Atraer a profesionales y sponsors top de fuera a Galicia.
      </SlideText>
      <SlideText size="sm" muted>
        El hermano mayor del HackUDC: el mayor de España y uno de los más
        grandes de Europa.
      </SlideText>
      <SlideText size="sm" muted>
        Hackathon orientado a profesionales y emprendimiento. Temática: IA.
      </SlideText>
    </TitleBodyImageStackSlide>,

    <TitleBodyImageStackSlide
      key="expo"
      title="Atlántica Tech Expo"
      link={
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <SlideLink href="https://vds.tech" />
          <SlideLink href="https://www.southsummit.io/en" />
        </div>
      }
      images={[
        { src: photoPlaceholder(2, 800, 500), alt: "Expo hall with booths" },
        { src: photoPlaceholder(3, 800, 500), alt: "Crowd between stands" },
      ]}
    >
      <SlideText size="sm" bold>
        10.000 asistentes
      </SlideText>
      <SlideText size="sm" muted>
        Misión: subir el PIB de Galicia sin depender del Camino de Santiago ni
        de hacer coches chinos.
      </SlideText>
      <SlideText size="sm" muted>
        Relacionar inversores con startups. Relacionar corporates con startups.
      </SlideText>
      <SlideText size="sm" muted>
        Espacio para dar visibilidad a las empresas tech y acercar tecnología a
        la sociedad y a estudiantes.
      </SlideText>
    </TitleBodyImageStackSlide>,

    <LogoWallSlide
      key="supporters"
      title="Entidades que apoyan esta propuesta"
      logos={supporterNames.map((name, i) => ({
        src: logoPlaceholder(name, i),
        alt: name,
      }))}
    />,

    contactClosing({
      title: "Galicia, the next european tech hub",
      email: "sponsor@1hack.eu",
    }),
  ],
};
