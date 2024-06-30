"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

const MAP_API_KEY = process.env.NEXT_PUBLIC_GCP_API_KEY // 先ほど生成したAPIキー

// 最初にMapを表示する時の設定
const DEFAULT = {
  CENTER: {
    lat: 36.485625947304776,
    lng: 139.14064044488444 
  } as google.maps.LatLngLiteral,
  ZOOM: 16
} as const;

// width指定がないと描画されない。
const VIEW_STYLE = {
  width: '100%',
  aspectRatio: '16 / 9',
}

const Map: React.FC = () => {
  return (
    <Wrapper apiKey={MAP_API_KEY ||  "test"}>
      <Content />
    </Wrapper>
  );
};

// 中身
const Content: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const option = {
        center: DEFAULT.CENTER,
        zoom: DEFAULT.ZOOM,
      };
      setMap(new window.google.maps.Map(ref.current, option));
    }
  }, []);

  return (
    <div style={VIEW_STYLE} ref={ref} />
  );
};

export default Map;