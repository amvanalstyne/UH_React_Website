import React from 'react';
import bandImage from './band.jpg';
import mediaImage from './media.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Navbar = () => (
  <nav style={styles.nav}>
    <div style={styles.navContainer}>
      <Link to="/" style={styles.navLink}>Home</Link>
      <Link to="/problem" style={styles.navLink}>The Problem</Link>
      <Link to="/solution" style={styles.navLink}>How To Help</Link>
      <Link to="/bibliography" style={styles.navLink}>Bibliography</Link>
    </div>
  </nav>
);

const Home = () => (
  <div style={styles.page}>
    <img 
      src={mediaImage} 
      alt="Depiction of Physical Media" 
      style={styles.heroImage} 
    />
    <header style={styles.hero}>
      <h2 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Research Project:
      </h2>
      <h1 style={{ ...styles.title, fontSize: '2.2rem', borderBottom: '2px solid black', paddingBottom: '15px' }}>
        How has the Rise of Streaming, Especially Among Young Adults, Affected the Ability for Independent Musicians to Profit from their Art?
      </h1>
      
      <p style={{ ...styles.description, marginTop: '20px', textAlign: 'justify' }}>
        In the modern era, consumers default to streaming due to its accessibility and the 
        habitual nature of the platforms (Díaz-Marcos et al. 2025). This project seeks to 
        bridge the gap between artists and their supporters by teaching readers about 
        different ways they can support creators outside of merely streaming their music 
        online.
      </p>
    </header>

    <section style={{ ...styles.text, textAlign: 'left', marginTop: '40px' }}>
      <h3 style={styles.subTitle}>Project Objectives</h3>
      <p>
        By presenting a research-based analysis of current shortcomings in the music industry 
        model, this website aims to:
      </p>
      <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
        <li><strong>Raise Awareness:</strong> Understand how musicians work and profit outside of digital platforms.</li>
        <li><strong>Challenge Behavior:</strong> Encourage a shift from habitual streaming to more tangible forms of support.</li>
        <li><strong>Promote Sustainability:</strong> Inform readers on how to ensure a healthy and growing musical industry through informed choices.</li>
      </ul>
    </section>

    <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#888', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <p>Alex Van Alstyne | Honors College | University of Alabama</p>
    </footer>
  </div>
);


const Problem = () => (
  <div style={styles.page}>
    <img 
    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" 
    alt="Empty recording studio" 
    style={styles.heroImage} 
    />
    <div style={styles.text}>
      <p style = {styles.hero}>
        <h2 style={styles.subTitle}>The Problem: A Systemic Imbalance</h2>
        The rise of streaming has fundamentally changed how young people interact with music, 
        driven primarily by habit and accessibility (Díaz-Marcos et al. 2025). 
        However, this shift has created a significant "cannibalization" of profits, where 
        streaming often replaces traditional revenue sources like physical media rather than 
        complementing them (Wlömert and Papies 2016).
      </p>
      
      <div style={{ textAlign: 'left', margin: '30px 0' }}>
        <h3 style={{ borderBottom: '1px solid #ccc' }}>Critical Challenges:</h3>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Revenue Displacement:</strong> Consumers who adopt a streaming-based approach 
            purchase far fewer CDs and other physical media (Wlömert and Papies 2016).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>The Elite Gap:</strong> Streaming profits are heavily weighted toward the 
            top 1% of artists, leaving independent musicians struggling for sustainability 
            (Johansson 2023).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Low Return for Creators:</strong> Musicians see a significant decrease in 
            revenue—up to 40x—when comparing free streaming models to paid ones (Aly-Tovar et al. 2019).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>The Royalty Disconnect:</strong> Pro-rata models often distribute fees 
            based on total market share rather than individual listener behavior, funneling 
            fan money to artists they don't even listen to (Johansson 2023).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Devaluation of Art:</strong> Unlimited access for a flat rate has 
            lowered the perceived "per-unit" value of music, making it harder to sell 
            individual downloads or copies (Happonen 2016).
          </li>
        </ul>
      </div>
    </div>
    <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#888', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <p>Alex Van Alstyne | Honors College | University of Alabama</p>
    </footer>
  </div>
);

const Solution = () => (
  <div style={styles.page}>
    <img 
      src={bandImage} 
      alt="Band performing on stage" 
      style={styles.heroImage} 
    />
    <div style={styles.hero}>
      <h2 style={styles.subTitle}>How You Can Make a Difference</h2>
      <p style={styles.text}>
        Because streaming alone is not a sufficient source of income for musicians, independent 
        artists must diversify into other avenues to supplement their profits (Happonen 2016). 
        Informing readers about these alternatives is vital to a healthy and growing musical 
        industry.
      </p>
    </div>
    
    <div style={styles.grid}>
      <div style={styles.card}>
        <h3>Live Performances</h3>
        <p>
          While streaming may cannibalize record sales, research indicates it can have a 
          positive effect on live music sales, particularly for established artists (Nguyen, 
          Dejean, and Moreau 2013).
        </p>
      </div>
      <div style={styles.card}>
        <h3>Physical Media</h3>
        <p>
          Purchasing CDs or vinyl directly impacts an artist's ability to profit, countering 
          the negative effect streaming has on total music expenditures (Wlömert and Papies 2016).
        </p>
      </div>
      <div style={styles.card}>
        <h3>Direct Contributions</h3>
        <p>
          Independent musicians can use a variety of income channels, including direct 
          financial contributions and merchandise, to make a reasonable living (Happonen 2016).
        </p>
      </div>
        <div style={styles.card}>
          <h3>Direct-to-Fan</h3>
          <p>
            Using platforms with higher profit margins, like Bandcamp or personal webstores, ensures more funds reach the artist directly.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Ethical Consumerism</h3>
          <p>
            Switching from free tiers to paid subscriptions can increase the revenue generated for artists by up to 40x per stream (Aly-Tovar et al. 2019).
          </p>
        </div>
        <div style={styles.card}>
          <h3>Social Advocacy</h3>
          <p>
            Sharing an artist's work and educating others on streaming realities helps shift the "habitual" behavior of young adults toward intentional support (Díaz-Marcos et al. 2025).
          </p>
        </div>
    </div>
    <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#888', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <p>Alex Van Alstyne | Honors College | University of Alabama</p>
    </footer>
  </div>
);

const Bibliography = () => (
    <div style={styles.page}>
    <img 
      src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" 
      alt="Library books" 
      style={styles.heroImage} 
    />
    <div style={styles.hero}>
    <h2 style={styles.subTitle}>References</h2>
    <div style={{ ...styles.text, textAlign: 'left', fontSize: '0.9rem' }}>
      <p style={styles.bibItem}>
        Aly-Tovar, R., Bacache-Beauvallet, M., Bourreau, M., & Moreau, F. (2019). Why would artists favor free streaming? <em>Journal of Cultural Economics</em>, 44(2), 255-280. https://doi.org/10.1007/s10824-019-09358-z
      </p>
      <p style={styles.bibItem}>
        Díaz-Marcos, L., Tevar, Ó. A., Vicente, A. T. D., & Sebastián, M. G. de B. (2025). Knowledge and behavior of young people on music streaming platforms: Factors driving their use. <em>Journal of Innovation & Knowledge</em>, 13, 100927. https://doi.org/10.1016/j.jik.2025.100927
      </p>
      <p style={styles.bibItem}>
        Happonen, P. (2016). The Consumption and Perceived Value of Music in the Digital Age: Adolescents and Young Adults as Music Consumers. <em>Theseus.fi</em>.urn:NBN:fi:amk-201604184508
      </p>
      <p style={styles.bibItem}>
        Johansson, D. (2023). Revenue Distribution From Music Streaming - A Quantitative Analysis of Swedish Artists on Spotify. https://www.digitalmusicnews.com/wp-content/uploads/2023/05/JohanssonD_Spotify_Sweden_Study.pdf
      </p>
      <p style={styles.bibItem}>
        Lee, M., Choi, H., Cho, D., & Lee, H. (2016). Cannibalizing or Complementing?. The Impact of Online Streaming Services on Music Record Sales. <em>Procedia Computer Science</em>, 91, 662-671. https://doi.org/10.1016/j.procs.2016.07.166 
      </p>
      <p style={styles.bibItem}>
        Nguyen, G. D., Dejean, S., & Moreau, F. (2013). On the complementarity between online and offline music consumption: the case of free streaming. <em>Journal of Cultural Economics</em>, 38(4), 315-330. https://doi.org/10.1007/s10824-013-9208-8 
      </p>
      <p style={styles.bibItem}>
        Savoia, F. (2024). Streaming technology and its impact on the music industry. A logistic regression analysis of willingness to pay for digital music and premium subscriptions to streaming music platforms. <em>Unive.it</em>. https://hdl.handle.net/20.500.14247/5983
      </p>
      <p style={styles.bibItem}>
        Wlömert, N., & Papies, D. (2016). On-demand streaming services and music industry revenues – Insights from Spotify's market entry. <em>International Journal of Research in Marketing</em>, 33(2), 314-327. https://www.sciencedirect.com/science/article/abs/pii/S0167811615001226 
      </p>
    </div>
    </div>
    <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#888', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <p>Alex Van Alstyne | Honors College | University of Alabama</p>
    </footer>
  </div>
);


export default function App() {
  return (
    <Router>
      <div style={styles.appBody}>
        <Navbar />
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/bibliography" element={<Bibliography />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  appBody: { 
    fontFamily: '"Times New Roman", Times, serif',
    color: '#3d3935', // Soft Charcoal instead of pure #333
    lineHeight: '1.6',
    backgroundColor: '#EDEAE0', // Your Alabaster White
    minHeight: '100vh'
  },
  nav: { 
    background: '#4a4540', // Deep Warm Taupe (matches Alabaster better than blue-grey)
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  navContainer: { 
    display: 'flex', 
    justifyContent: 'space-around',
    width: '60%',
    maxWidth: '800px',
    alignItems: 'center'
  },
  navLink: { 
    color: '#EDEAE0', // Alabaster links on dark nav
    textDecoration: 'none', 
    fontWeight: 'bold',
    fontSize: '1.1rem',
    fontFamily: '"Times New Roman", Times, serif'
  },
  page: { padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  hero: { 
    backgroundColor: '#e2dfd5', // Slightly darker shade of Alabaster for depth
    padding: '50px', 
    borderRadius: '10px' 
  },
  title: { 
    fontSize: '2.5rem', 
    marginBottom: '20px', 
    color: '#1a1817' // Soft Black
  },
  subTitle: { 
    fontSize: '2rem', 
    color: '#1a1817',
    marginBottom: '20px'
  },
  description: { fontSize: '1.2rem', color: '#5e5954' },
  text: { fontSize: '1.1rem', marginTop: '20px' },
  content: { marginTop: '0px' }, // Removed top margin to keep nav flush
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '20px', 
    marginTop: '30px' 
  },
  card: { 
    padding: '20px', 
    border: '1px solid #d1ccc0', 
    borderRadius: '8px',
    backgroundColor: '#f5f3ef' // Off-white card background
  },
  bibItem: {
    marginBottom: '18px',
    paddingLeft: '2em',
    textIndent: '-2em',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    textAlign: 'left'
  },
  heroImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)' // Softer shadow for the new palette
  },
  footer: { 
    marginTop: '50px', 
    fontSize: '0.8rem', 
    color: '#7a736a', 
    borderTop: '1px solid #d1ccc0', 
    paddingTop: '20px' 
  }
};