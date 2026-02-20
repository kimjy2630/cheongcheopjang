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
            <b>서울대학교 연구공원 웨딩홀</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 서울대학교 정, 후문을 통과할 경우 통행료가 발생하므로
              유의바랍니다. 낙성대 방향으로 이용해주세요.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
