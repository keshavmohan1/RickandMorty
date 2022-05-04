import '../Dashboard/Dashboard.css';

export const Profile = (props) => {
    return (

        <div className="showcase__Inner-sc-1x4wk68-1 iUltZj">
            <div className="characterCard__Wrapper-sc-1ejywvi-0 jHMBqe">
                <div className="characterCard__ImgWrapper-sc-1ejywvi-1 gzCUdp">
                    <img src={props?.image} alt={props?.name} /></div>
                <div className="characterCard__ContentWrapper-sc-1ejywvi-2 ldeZQp">
                    <div className="section"><a href={props?.url} rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
                        <div className='h2bold'>{props?.name}</div></a><span className="status">
                            <span className={props?.status === 'Alive' ? 'status__icon_green' : 'status_icon_red'}></span> {props?.status} - {props?.species}</span></div>
                    <div className="section">
                        <span className="text-gray">Origin:</span>
                        <a href="https://rickandmortyapi.com/api/location/20" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">{props?.origin}</a></div>
                    <div className="section"><span className="text-gray">Location:</span>
                        {props?.location}
                    </div></div></div></div>
    )
}