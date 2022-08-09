import { Section, SameTitle, SameP } from '../styles/sameStyle';
import { NewsInner, NewsCard, NewsBtn } from '../styles/newsStyle';
import news1 from '../images/news-1.png';
import news2 from '../images/news-2.png';
import news3 from '../images/news-3.png';
function NewsComponent() {
  return (
    <Section>
      <SameTitle>Why choose 24hr home care</SameTitle>
      <SameP>labore et dolore magna aliqua. Ut enim ad minim veniam</SameP>
      <NewsInner>
        <NewsCard>
          <img src={news1} />
          <h3>
            Daily
            <br /> care <br />
            experts
          </h3>
        </NewsCard>
        <NewsCard>
          <img src={news2} />
          <h3>
            Available
            <br /> 24/7
          </h3>
        </NewsCard>
        <NewsCard>
          <img src={news3} />
          <h3>
            Balanced <br />
            care
          </h3>
        </NewsCard>
      </NewsInner>
      <NewsBtn>Get a Quote</NewsBtn>
    </Section>
  );
}

export default NewsComponent;
