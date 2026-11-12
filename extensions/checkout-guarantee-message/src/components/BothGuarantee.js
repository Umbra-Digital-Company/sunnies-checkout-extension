const GUARANTEE_IMAGE =
  'https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized_b800ef4f-2b41-40a1-ad43-8f7d040a78ef.png?v=1794462923';
const LEARN_MORE = 'https://ph.sunniesstudios.com/pages/sunnies-guarantee';

export default function BothGuarantee() {
  return (
    <s-stack direction="block" gap="base">
      <s-image src={GUARANTEE_IMAGE} alt="Sunnies Guarantee" />
      <s-paragraph>
        We hope you are happy with your purchase. If not, you’re welcome to
        change your Sunnies purchase:
      </s-paragraph>
      <s-unordered-list>
        <s-list-item>
          Sunnies Studios products include a 90-day guarantee.{' '}
          <s-link href={LEARN_MORE} target="_blank">
            Learn more
          </s-link>
        </s-list-item>
        <s-list-item>
          Sunnies Flask includes a limited lifetime warranty against
          manufacturing defects and workmanship issues. Applies to Sunnies Club
          members only.{' '}
          <s-link href={LEARN_MORE} target="_blank">
            Learn more
          </s-link>
        </s-list-item>
      </s-unordered-list>
    </s-stack>
  );
}
