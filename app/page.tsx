const objectives = [
  "Present state-of-the-art advances in tactile sensing hardware, sensor modeling, and large-area tactile skin design.",
  "Highlight how tactile sensing improves dexterous grasping, in-hand manipulation, contact-rich interaction, and robot adaptation in unstructured environments.",
  "Connect tactile sensing with robot learning, including self-supervised learning, multimodal policy learning, tactile simulation, and sim-to-real transfer.",
  "Identify open research challenges and foster a shared research agenda for tactile sensing as a core component of embodied intelligence.",
];

const speakers = [
  {
    name: "Edward Adelson",
    affiliation: "Massachusetts Institute of Technology",
    image: "/people/edward-adelson.jpg",
    url: "https://persci.mit.edu/people/adelson/",
    status: "Confirmed",
  },
  {
    name: "Raunaq Bhirangi",
    affiliation: "Co-founder, Stealth Startup",
    image: "/people/raunaq-bhirangi.jpg",
    url: "https://raunaqb.com/",
    status: "Confirmed",
  },
  {
    name: "Ruihan Gao",
    affiliation: "Carnegie Mellon University",
    image: "/people/ruihan-gao.jpg",
    url: "https://ruihangao.github.io/",
    status: "Confirmed",
  },
  {
    name: "Yunzhu Li",
    affiliation: "Columbia University",
    image: "/people/yunzhu-li.jpg",
    url: "https://yunzhuli.github.io/",
    status: "Confirmed",
  },
  {
    name: "Roberto Calandra",
    affiliation: "TU Dresden",
    image: "/people/roberto-calandra.png",
    url: "https://lasr.org/people/roberto-calandra",
    status: "Tentative",
  },
];

const topics = [
  "Scalable tactile sensors, tactile skins, and sensor integration",
  "Tactile modeling, simulation, synthesis, and sim-to-real transfer",
  "Tactile perception, representation learning, and multimodal learning",
  "Tactile-driven grasping, dexterous manipulation, and contact-rich control",
  "Human demonstrations, wearable sensing, and human-to-robot skill transfer",
  "Tactile datasets, benchmarks, standardization, and real-world deployment",
];

const organizers = [
  {
    name: "Homanga Bharadhwaj",
    affiliation: "Johns Hopkins University",
    image: "/people/homanga-bharadhwaj.png",
    url: "https://homangab.github.io/",
  },
  {
    name: "Irmak Guzey",
    affiliation: "New York University",
    image: "/people/irmak-guzey.jpg",
    url: "https://irmakguzey.github.io/",
  },
  {
    name: "Arik Slepyan",
    affiliation: "Johns Hopkins University",
    image: "/people/arik-slepyan.jpg",
    url: "https://arielslepyan.me/",
  },
  {
    name: "Haozhi Qi",
    affiliation: "Amazon Frontier AI & Robotics / University of Chicago",
    image: "/people/haozhi-qi.jpg",
    url: "https://haozhi.io/",
  },
  {
    name: "Wenzhen Yuan",
    affiliation: "University of Illinois Urbana-Champaign",
    image: "/people/wenzhen-yuan.jpg",
    url: "https://siebelschool.illinois.edu/about/people/faculty/yuanwz",
  },
  {
    name: "Greg Hager",
    affiliation: "Johns Hopkins University",
    image: "/people/greg-hager.jpg",
    url: "https://www.cs.jhu.edu/hager/",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tactile Dexterity workshop home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Touch / Dexterity</strong>
            <small>IROS 2026</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#call-for-papers">Call for papers</a>
          <a href="#organizers">Organizers</a>
        </nav>
        <a className="header-cta" href="#submissions">
          Submission details <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>IROS 2026 workshop</span>
            <span>Pittsburgh, Pennsylvania</span>
          </div>
          <h1>
            Scalable Tactile Sensing for <em>Dexterous Manipulation</em>
          </h1>
          <p className="hero-lede">
            Bringing hardware, learning, and control together to make touch a core sensing modality for next-generation robotic systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#call-for-papers">
              Explore the call for papers <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#about">
              About the workshop <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/images/tactile-haptic-glove.jpg"
              alt="A sensorized glove transferring tactile demonstrations to a robot hand"
            />
            <div className="image-label">
              <span>01</span>
              <p>From human touch<br />to robot dexterity</p>
            </div>
          </div>
          <div className="pressure-map" aria-hidden="true">
            <span className="pulse pulse-one" />
            <span className="pulse pulse-two" />
            <span className="pulse pulse-three" />
            <span className="map-label">contact / force / texture</span>
          </div>
        </div>

        <div className="event-strip" aria-label="Workshop details">
          <div>
            <small>Date</small>
            <strong><time dateTime="2026-09-27">September 27, 2026</time></strong>
          </div>
          <div>
            <small>Time</small>
            <strong>1:00–5:30 PM</strong>
          </div>
          <div>
            <small>Format</small>
            <strong>In person · Half day</strong>
          </div>
          <div className="deadline">
            <small>Paper deadline</small>
            <strong><time dateTime="2026-08-17T23:59:00-04:00">August 17 · 23:59 GMT−4</time></strong>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="section-heading">
          <p className="kicker">01 / Introduction</p>
          <h2>Touch is the missing layer of embodied intelligence.</h2>
        </div>
        <div className="intro-copy rich-copy">
          <p>
            Tactile sensing is a key enabling technology for real-world, general-purpose embodied robotic intelligence. It is essential for detecting contact, estimating physical properties, and responding appropriately during real-world interaction. Yet, despite decades of research, robotic touch still lags far behind human capability in sensing resolution, surface coverage, response speed, robustness, and ease of integration.
          </p>
          <p>
            Compared with vision, tactile sensing remains less standardized and less widely used, especially for dexterous manipulation, contact-rich control, and data-efficient robot learning. This workshop brings together researchers working on tactile sensor design, contact modeling, simulation, manipulation, robot learning, and multimodal perception to examine how touch can advance robotic dexterity.
          </p>
          <p>
            The field is moving beyond standalone sensor development toward integrated tactile pipelines that connect hardware, representation learning, control, and real-world deployment. We will focus on scalable tactile skins, tactile simulation, visuo-tactile learning, tactile foundation models, and sim-to-real transfer—especially for complex, changing contacts involving multiple fingers and joints.
          </p>
        </div>
      </section>

      <section className="section people-section" id="speakers">
        <div className="people-heading">
          <div>
            <p className="kicker">02 / Invited speakers</p>
            <h2>Across sensing, learning, and manipulation.</h2>
          </div>
          <p>Confirmed and tentative invited speakers from academia and industry.</p>
        </div>
        <div className="speaker-grid">
          {speakers.map((speaker, index) => (
            <a
              className="speaker-card"
              href={speaker.url}
              target="_blank"
              rel="noreferrer"
              key={speaker.name}
            >
              <div className="speaker-photo">
                <img src={speaker.image} alt={`Portrait of ${speaker.name}`} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="speaker-meta">
                <span className={`status ${speaker.status === "Tentative" ? "status-tentative" : ""}`}>
                  {speaker.status}
                </span>
                <h3>{speaker.name}</h3>
                <p>{speaker.affiliation}</p>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="section objectives-section" aria-labelledby="objectives-title">
        <div className="section-heading compact-heading">
          <p className="kicker">What we will examine</p>
          <h2 id="objectives-title">Four objectives, one shared research agenda.</h2>
        </div>
        <ol className="objective-grid">
          {objectives.map((objective, index) => (
            <li key={objective}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{objective}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section structure" id="format">
        <div className="structure-header">
          <p className="kicker kicker-light">03 / Workshop format</p>
          <h2>Built for exchange.</h2>
        </div>
        <div className="structure-grid">
          <article>
            <span className="format-index">A</span>
            <h3>Invited keynotes</h3>
            <p>Perspectives spanning tactile hardware, learning, and real-world manipulation, with dedicated time for Q&amp;A.</p>
          </article>
          <article>
            <span className="format-index">B</span>
            <h3>Posters &amp; live demos</h3>
            <p>A coffee-break session featuring up to 20 posters alongside interactive tactile systems and research prototypes.</p>
          </article>
          <article>
            <span className="format-index">C</span>
            <h3>Contributed spotlights</h3>
            <p>Up to four selected papers will be invited to give concise 10-minute presentations during the workshop.</p>
          </article>
          <article>
            <span className="format-index">D</span>
            <h3>Panel &amp; guided debate</h3>
            <p>Open problems in simulation, multimodal learning, benchmarking, and scalable sensor design—moderated by the organizers.</p>
          </article>
        </div>
        <div className="structure-note">
          <p>
            Early-career researchers are especially encouraged to participate through poster submissions and short contributed talks. Workshop papers are non-archival; work already submitted to or accepted by other venues is welcome.
          </p>
          <span>Discussion-led · Cross-disciplinary · In person</span>
        </div>
      </section>

      <section className="section cfp" id="call-for-papers">
        <div className="cfp-heading">
          <p className="kicker kicker-light">04 / Call for papers</p>
          <h2>Share work that moves touch from the lab into the world.</h2>
        </div>
        <div className="cfp-copy rich-copy rich-copy-light">
          <p>
            We welcome <strong>4–8 page papers</strong> describing ongoing research, recently completed work, or previously published or concurrently submitted work. Submissions should follow the <strong>IROS paper format</strong>. The workshop is non-archival, and we particularly encourage early-stage ideas, emerging research directions, system demonstrations, datasets, benchmarks, and work in progress.
          </p>
          <p>
            Authors of accepted submissions will be invited to present during the poster and demo session. Up to four submissions will also be selected for <strong>10-minute spotlight presentations</strong> during the workshop. Submissions will be evaluated by external reviewers.
          </p>
        </div>

        <div className="demo-callout">
          <div>
            <span className="demo-label">Live demo submissions</span>
            <h3>Bring the system. Let the room feel the research.</h3>
          </div>
          <div>
            <p>
              We especially encourage live demonstrations of tactile sensing systems, dexterous manipulation platforms, simulation tools, datasets, and interactive research prototypes.
            </p>
            <p>
              Demo proposals follow the same 4–8 page format and use the same OpenReview portal. Prefix the submission title with <strong>“Live Demo”</strong>. Accepted demonstrations will be presented alongside the posters.
            </p>
          </div>
        </div>
      </section>

      <section className="section topics-section" aria-label="Topics of interest">
        <p className="kicker topics-kicker">Topics of interest</p>
        <ul className="topic-list">
          {topics.map((topic, index) => (
            <li key={topic}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{topic}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section submissions" id="submissions">
        <div className="submission-card">
          <div className="submission-title">
            <p className="kicker">Submission information</p>
            <h2>Put your work in the room.</h2>
            <p>At least one author of each accepted submission is expected to attend and present in person.</p>
          </div>
          <dl>
            <div>
              <dt>Paper deadline</dt>
              <dd>August 17, 2026<br /><span>23:59 GMT−4</span></dd>
            </div>
            <div>
              <dt>Notification</dt>
              <dd>To be announced</dd>
            </div>
            <div>
              <dt>Workshop</dt>
              <dd>September 27, 2026<br /><span>1:00–5:30 PM</span></dd>
            </div>
          </dl>
          <span className="button button-disabled" aria-disabled="true">
            OpenReview portal coming soon
          </span>
        </div>
      </section>

      <section className="section organizers-section" id="organizers">
        <p className="kicker organizers-kicker">05 / Organizers</p>
        <div className="organizer-grid">
          {organizers.map((organizer) => (
            <a
              className="organizer-card"
              href={organizer.url}
              target="_blank"
              rel="noreferrer"
              key={organizer.name}
            >
              <img src={organizer.image} alt={`Portrait of ${organizer.name}`} />
              <div>
                <h3>{organizer.name}</h3>
                <p>{organizer.affiliation}</p>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div>
          <p>Scalable Tactile Sensing for Dexterous Manipulation</p>
          <span>IROS 2026 · Pittsburgh, Pennsylvania</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
