/** @jsxImportSource preact */
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import EyewearGuarantee from './components/EyewearGuarantee';
import BothGuarantee from './components/BothGuarantee';
import FlaskGuarantee from './components/FlaskGuarantee';

export default function extension() {
  render(<Guarantee />, document.body);
}

function Guarantee() {
  const lines = shopify.lines?.value ?? [];
  let flaskCount = 0;
  let eyewearCount = 0;

  for (const line of lines) {
    for (const attribute of line.attributes ?? []) {
      const key = attribute?.key ?? '';
      const value = attribute?.value ?? '';
      if (!key.includes('item_type')) continue;
      if (value.includes('flask')) {
        flaskCount += 1;
      } else {
        eyewearCount += 1;
      }
    }
  }

  const message =
    flaskCount > 0 && eyewearCount === 0 ? (
      <FlaskGuarantee />
    ) : flaskCount > 0 && eyewearCount > 0 ? (
      <BothGuarantee />
    ) : (
      <EyewearGuarantee />
    );

  return (
    <s-box border="base" padding="base" borderRadius="base">
      {message}
    </s-box>
  );
}
