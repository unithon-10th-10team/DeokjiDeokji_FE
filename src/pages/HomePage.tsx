import React, { useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';

declare global {
  interface Window {
    kakao: any;
  }
}
const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };
  const locations = [
    {
      title: '카카오',
      latlng: {
        lat: 33.450705,
        lng: 126.570677,
      },
      category: 'restaurant',
    },
    {
      title: '생태연못',
      latlng: {
        lat: 33.450936,
        lng: 126.569477,
      },
      category: 'coffee',
    },
    {
      title: '텃밭',
      latlng: {
        lat: 33.450879,
        lng: 126.56994,
      },
      category: 'birthday',
    },
    {
      title: '근린공원',
      latlng: {
        lat: 33.451393,
        lng: 126.570738,
      },
      category: 'coffee',
    },
  ];

  return (
    <HomePageLayout>
      <CreateRecordModal
        isOpen={isCreateRecordModalOpen}
        setOpen={setIsCreateRecordModalOpen}
      />
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '100%' }}
      >
        {locations.map((loc, idx) => (
          <MapMarker
            key={`${loc.title}-${loc.latlng}`}
            position={loc.latlng}
            image={{
              src: `/assets/svg/${loc.category}.svg`,
              size: { width: 24, height: 35 },
            }}
            title={loc.title}
          />
        ))}
      </Map>
      <CreateRecordBtn onClick={handleCreateBtnClick} />
    </HomePageLayout>
  );
};

const HomePageLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default HomePage;
