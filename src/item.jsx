import styles from './item.module.css';
import classNames from 'classnames';
import fr from './fr.svg';
import email from './mail.svg';

const Item = ({ item }) => {
  const {
    firstName,
    secondName,
    parentName,
    position,
    sector,
    image,
    phone,
    mobilePhone,
    mail,
    events,
  } = item;

  const getNearest = (data) => {
    let active;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    data.forEach((el) => {
      const [d, m, y] = el.startDate.split('.');
      const [endD, endM, endY] = el.endDate.split('.');
      let startDay = new Date(y, m - 1, d);
      let endDay = new Date(endY, endM - 1, endD);
      if (today >= startDay && today <= endDay) {
        active = el;
      }
    });
    return active || [];
  };

  const eventList = events
    .filter((el) => el.id != getNearest(events).id)
    .map((el, i) => {
      return (
        <>
          <p key={i}>
            {el.category} {el.startDate}-{el.endDate}
          </p>
        </>
      );
    });
  return (
    <li className={classNames(styles.item)}>
      <div className={classNames(styles.wrapper)}>
        <div className={styles.wrapperFio}>
          <div
            style={{
              backgroundImage: `url('${image}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: '90px',
              width: '90px',
              borderRadius: '50%',
              objectFit: 'contain',
            }}
          />
          <div className={styles.bio}>
            <div className={styles.events}>
              {events.length > 1 ? (
                <div className={styles.badge}>
                  {events.length != 1 && getNearest(events) !== undefined && (
                    <p>Еще {events.length > 1 && events.length - 1}</p>
                  )}
                  <div className={styles.tooltip}>
                    <div>{eventList}</div>
                  </div>
                </div>
              ) : (
                ''
              )}
              <p>
                {getNearest(events) != null &&
                  `${getNearest(events).category ?? ''} ${
                    getNearest(events).startDate ?? ''
                  } ${getNearest(events).endDate ?? ''}`}
              </p>
            </div>
            <h2
              className={styles.name}
            >{`${secondName} ${firstName} ${parentName}`}</h2>
            <p>{position}</p>
            <p>{sector}</p>
          </div>
        </div>
        <div className={styles.contacts}>
          <div style={{ display: 'flex' }}>
            <img
              style={{
                width: '15px',
                marginRight: '10px',
              }}
              src={fr}
            ></img>
            <p>{phone}</p>
          </div>
          <div style={{ display: 'flex' }}>
            <img
              style={{
                width: '15px',
                marginRight: '10px',
              }}
              src={fr}
            ></img>
            <p>{mobilePhone}</p>
          </div>
          <div style={{ display: 'flex' }}>
            <img
              style={{
                width: '15px',
                marginRight: '10px',
              }}
              src={email}
            ></img>
            <p>{mail}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
