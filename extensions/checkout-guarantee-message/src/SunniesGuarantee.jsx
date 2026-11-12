import React from 'react';
import { View, BlockStack, Heading, Text } from '@shopify/ui-extensions-react/checkout';

function SunniesGuarantee() {
  return (
    <View border="base" padding="base" borderRadius="base">
      <BlockStack spacing="loose">
        <img src="https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized_b800ef4f-2b41-40a1-ad43-8f7d040a78ef.png?v=1794462923" alt="Sunnies Guarantee" />
        <Heading>Sunnies Guarantee</Heading>
        <Text>
          We hope you are happy with your purchase. If not, your Sunnies Flask includes a limited lifetime warranty against manufacturing defects and workmanship issues. Applies to Sunnies Club members only. <a href="#">Learn more</a>.
        </Text>
      </BlockStack>
    </View>
  );
}

export default SunniesGuarantee;
