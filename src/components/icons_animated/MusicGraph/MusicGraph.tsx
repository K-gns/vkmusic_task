import styles from './MusicGraph.module.css'

interface IconProps {
    className: string;
    animated?: boolean; //Добавляет анимацию
}

const MusicGraph :React.FC<IconProps> = ({className, animated}) => (
    <svg
        className={`${className} ${animated ? styles.animated : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M2.75 18C3.16421 18 3.5 17.6642 3.5 17.25V5.25C3.5 4.83579 3.16421 4.5 2.75 4.5C2.33579 4.5 2 4.83579 2 5.25V17.25C2 17.6642 2.33579 18 2.75 18Z"
              fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M6.25 18C6.66421 18 7 17.6642 7 17.25V8.25C7 7.83579 6.66421 7.5 6.25 7.5C5.83579 7.5 5.5 7.83579 5.5 8.25V17.25C5.5 17.6642 5.83579 18 6.25 18Z"
              fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M10 18C10.4142 18 10.75 17.6642 10.75 17.25V14.25C10.75 13.8358 10.4142 13.5 10 13.5C9.58579 13.5 9.25 13.8358 9.25 14.25V17.25C9.25 17.6642 9.58579 18 10 18Z"
              fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M13.75 18C13.3358 18 13 17.6642 13 17.25L13 3.74792C13 3.33371 13.3358 2.99792 13.75 2.99792C14.1642 2.99792 14.5 3.33371 14.5 3.74792L14.5 17.25C14.5 17.6642 14.1642 18 13.75 18Z"
              fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M17.25 18C16.8358 18 16.5 17.6642 16.5 17.25V11.75C16.5 11.3358 16.8358 11 17.25 11C17.6642 11 18 11.3358 18 11.75V17.25C18 17.6642 17.6642 18 17.25 18Z"
              fill="white"/>
    </svg>
);

export default MusicGraph;