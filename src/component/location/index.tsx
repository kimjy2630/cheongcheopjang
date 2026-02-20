import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">기차</div>
          <div />
          <div className="content">
            대전역 (KTX)
          </div>
          <div />
          <div className="heading">버스</div>
          <div />
          <div className="content">
            유성복합 / 대전청사 / 대전복합 터미널
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>카이스트 본원 노천극장</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
