import React, { useContext, useEffect, useState } from 'react';
import { Fade, Flex, Icon, Text } from '@chakra-ui/react';
import { techItems } from '../Projects/data/techItems';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const TechBanner: React.FC = () => {
  const { navigate } = useContext(SiteContext) as SiteInterface;
  const [techItemIndex, setTechItemIndex] = useState(0);
  const showcaseTechItems = techItems.filter(
    (item) =>
      item.name !== 'C++' &&
      item.name !== 'Svelte' &&
      item.name !== 'ChakraUI' &&
      item.name !== 'Tailwind'
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (techItemIndex === showcaseTechItems.length - 1) {
        setTechItemIndex(0);
      } else {
        setTechItemIndex((prev) => prev + 1);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Fade in>
      <Flex gap={8} alignItems='center'>
        <Flex
        cursor='pointer'
          pointerEvents='all'
          gap={4}
          onClick={() =>
            navigate(
              `/projects?filter=${showcaseTechItems[
                techItemIndex
              ].name.toLowerCase()}`
            )
          }
        >
          <Icon as={showcaseTechItems[techItemIndex].icon} />
          <Text>{showcaseTechItems[techItemIndex].name}</Text>
        </Flex>
        {showcaseTechItems[techItemIndex + 1] ? (
          <Flex
          cursor='pointer'
            pointerEvents='all'
            gap={4}
            onClick={() =>
              navigate(
                `/projects?filter=${showcaseTechItems[
                  techItemIndex + 1
                ].name.toLowerCase()}`
              )
            }
          >
            <Icon as={showcaseTechItems[techItemIndex + 1].icon} />
            <Text>{showcaseTechItems[techItemIndex + 1].name}</Text>
          </Flex>
        ) : (
          <Flex
          cursor='pointer'
            pointerEvents='all'
            gap={4}
            onClick={() =>
              navigate(
                `/projects?filter=${showcaseTechItems[0].name.toLowerCase()}`
              )
            }
          >
            <Icon as={showcaseTechItems[0].icon} />
            <Text>{showcaseTechItems[0].name}</Text>
          </Flex>
        )}
      </Flex>
    </Fade>
  );
};

export default TechBanner;
