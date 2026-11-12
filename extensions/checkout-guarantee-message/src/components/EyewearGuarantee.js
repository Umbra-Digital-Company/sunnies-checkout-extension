/** @jsxImportSource preact */
const GUARANTEE_IMAGE =
  'https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized_b800ef4f-2b41-40a1-ad43-8f7d040a78ef.png?v=1794467967';
const LEARN_MORE = 'https://ph.sunniesstudios.com/pages/sunnies-guarantee';

export default function EyewearGuarantee() {
  return (
    <s-stack direction="block" gap="base">
      <s-image src={GUARANTEE_IMAGE} alt="Sunnies Guarantee" inlineSize="auto" />
      <s-paragraph>
        Thank you. We hope you are happy with your purchase. If not, you’re
        welcome to change your Sunnies Studios product* within 90 days of
        purchase.
      </s-paragraph>
      <s-text type="small" color="subdued">
        *Terms and conditions apply
      </s-text>
      <s-link href={LEARN_MORE} target="_blank">
        Learn more
      </s-link>
    </s-stack>
  );
}
