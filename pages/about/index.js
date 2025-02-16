import BaseLayout from "../layout";
import { MainContainer } from "@/components/common/Layout/MainContainer";
import {
  AboutContainer,
  AboutContent,
  AboutSection,
  TeamSection,
  TeamMember
} from "@/components/about/about.styles";
import Image from "next/image";

export default function About() {
  return (
    <>
      <BaseLayout />
      <MainContainer>
        <AboutContainer>
          <AboutContent>
            <AboutSection>
              <h1>About MySide Shop</h1>
              <p>
                Welcome to MySide Shop, your premier destination for unique and stylish products.
                Founded in 2024, we&apos;ve made it our mission to bring you carefully curated items
                that combine quality, style, and affordability.
              </p>
            </AboutSection>

            <AboutSection>
              <h2>Our Story</h2>
              <p>
                MySide Shop started as a small online boutique with a simple idea:
                to create a shopping experience that feels personal and enjoyable.
                We believe that shopping should be more than just a transaction –
                it should be an experience that brings joy and satisfaction.
              </p>
            </AboutSection>

            <AboutSection>
              <h2>Our Mission</h2>
              <p>
                We strive to provide our customers with:
              </p>
              <ul>
                <li>High-quality products at competitive prices</li>
                <li>Exceptional customer service</li>
                <li>A seamless shopping experience</li>
                <li>Carefully selected items that bring value to your life</li>
              </ul>
            </AboutSection>

            <TeamSection>
              <h2>Our Team</h2>
              <div className="team-grid">
                <TeamMember>
                  <Image
                    src="https://takashinishi.com/images/Eu-about.png"
                    alt="Ygor Takashi Nishi"
                    width={200}
                    height={200}
                  />
                  <h3>Ygor Takashi Nishi</h3>
                  <p>Founder & CEO</p>
                </TeamMember>
              </div>
            </TeamSection>

            <AboutSection>
              <h2>Contact Us</h2>
              <p>
                Have questions? We&apos;d love to hear from you! Reach out to us at:
                <br />
                Email: ygortn14@gmail.com
                <br />
                Phone: (18) 99668-2139
                <br />
                Hours: Monday - Friday, 9:00 AM - 6:00 PM AMT
              </p>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </MainContainer>
    </>
  );
} 