import React from 'react';

const Information = () => {
  return (
    <div className="text-white space-y-12">
      <h2 className="text-5xl font-bold">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h2>
      <h3 className="text-3xl">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</h3>
      <h3 className="text-lg">개발자가 필요하신가요?</h3>
      <div className="flex items-center justify-between max-xl:hidden space-x-4">
        <div className="border-t border-white w-max">
          <h3 className="font-bold pt-4">평균 월 120만원</h3>
          <p className="text-wrap">임금을 해당 국가를 기준으로 계산합니다.</p>
        </div>
        <div className="border-t border-white w-max">
          <h3 className="font-bold pt-4">최대 3회 인력교체</h3>
          <p className="text-wrap">막상 채용해보니 맞지 않아도 걱정하지 마세요. </p>
        </div>
        <div className="border-t border-white w-max">
          <h3 className="font-bold pt-4">평균 3일, 최대 10일</h3>
          <p className="text-wrap">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
