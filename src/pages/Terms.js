import React from "react";
import styled from "styled-components";
import bg from "../assets/images/background-5.png";

function Terms() {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      <Paragraph>
        These Terms of Service govern your use of the website located at
        recreate.ai and any related services provided by recreate solutions. By
        accessing https://recreate.ai, you agree to abide by these Terms of
        Service and to comply with all applicable laws and regulations. If you
        do not agree with these Terms of Service, you are prohibited from using
        or accessing this website or using any other services provided by
        Recreate Solutions (owner, Recreat AI). We, Recreate Solutions, reserve
        the right to review and amend any of these Terms of Service at our sole
        discretion. Upon doing so, we will update this page. Any changes to
        these Terms of Service will take effect immediately from the date of
        publication. These Terms of Service were last updated on 28 January 2025
      </Paragraph>

      <SectionTitle>1. Limitations of Use</SectionTitle>
      <Paragraph>
        By using this website, you warrant on behalf of yourself, your users,
        and other parties you represent that you will not: modify, copy, prepare
        derivative works of, decompile, or reverse engineer any materials and
        software contained on this website; remove any copyright or other
        proprietary notations from any materials and software on this website;
        transfer the materials to another person or “mirror” the materials on
        any other server; knowingly or negligently use this website or any of
        its associated services in a way that abuses or disrupts our networks or
        any other service Parichay Solutions provides; use this website or its
        associated services to transmit or publish any harassing, indecent,
        obscene, fraudulent, or unlawful material; use this website or its
        associated services in violation of any applicable laws or regulations;
        use this website in conjunction with sending unauthorized advertising or
        spam; harvest, collect, or gather user data without the user’s consent;
        or use this website or its associated services in such a way that may
        infringe the privacy, intellectual property rights, or other rights of
        third parties.
      </Paragraph>

      <SectionTitle>2. User Obligations</SectionTitle>
      <Paragraph>
        You retain your intellectual property ownership rights over content you
        submit to us for publication on our website. We will never claim
        ownership of your content, but we do require a license from you in order
        to use it. When you use our website or its associated services to post,
        upload, share, or otherwise transmit content covered by intellectual
        property rights, you grant to us a non-exclusive, royalty-free,
        transferable, sub-licensable, worldwide license to use, distribute,
        modify, run, copy, publicly display, translate, or otherwise create
        derivative works of your content in a manner that is consistent with
        your privacy preferences and our Privacy Policy. The license you grant
        us can be terminated at any time by deleting your content or account.
        However, to the extent that we (or our partners) have used your content
        in connection with commercial or sponsored content, the license will
        continue until the relevant commercial or post has been discontinued by
        us. You give us permission to use your username and other identifying
        information associated with your account in a manner that is consistent
        with your privacy preferences, and our Privacy Policy.
      </Paragraph>

      <SectionTitle>3. Limitation of Liability</SectionTitle>
      <Paragraph>
        In no event shall Recreate Solutions or its suppliers be liable for any
        consequential loss suffered or incurred by you or any third party
        arising from the use or inability to use this website or the materials
        on this website, even if Parichay Solutions or an authorized
        representative has been notified, orally or in writing, of the
        possibility of such damage. In the context of this agreement,
        “consequential loss” includes any consequential loss, indirect loss,
        real or anticipated loss of profit, loss of benefit, loss of revenue,
        loss of business, loss of goodwill, loss of opportunity, loss of
        savings, loss of reputation, loss of use and/or loss or corruption of
        data, whether under statute, contract, equity, tort (including
        negligence), indemnity, or otherwise. Because some jurisdictions do not
        allow limitations on implied warranties, or limitations of liability for
        consequential or incidental damages, these limitations may not apply to
        you.
      </Paragraph>

      <SectionTitle>4. Changes to Terms</SectionTitle>
      <Paragraph>
        We reserve the right to modify these terms at any time. Updates will be
        communicated through our platform.
      </Paragraph>

      <Paragraph>
        If you have any questions about these terms, please contact our support
        team.
      </Paragraph>
    </TermsContainer>
  );
}

const TermsContainer = styled.div`
  padding: 40px;
  color: #fff;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "'Plus Jakarta Sans', sans-serif";
`;

const Title = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  margin-top: 30px;
  color: #ffdd57;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 10px 0;
  width: 80%;
`;


export default Terms;
