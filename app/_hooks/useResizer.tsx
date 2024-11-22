interface WithResizerProps {
  resizeWidth: number;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

// function withResizer<T extends WithResizerProps>(
//   WrappedComponent: React.ComponentType<T>,
//   baseWidth = 200,
//   gap = 0,
// ) {
//   return (props: Omit<T, keyof WithResizerProps>) => {
//     const scrollContainerRef = useRef<HTMLDivElement>(null);

//     const [resizeWidth, setResizeWidth] = useState(baseWidth);

//     // assuming that useContainerDimensions is defined somewhere
//     const { height, width } = useContainerDimensions(scrollContainerRef);

//     useLayoutEffect(() => {
//       const adjustedWidth = width - 1; // for lapses

//       const coef = adjustedWidth / baseWidth;
//       const factor = Math.floor(coef);
//       const inBetweenGap = (factor - 1) * gap;

//       const remainingWidth = adjustedWidth - inBetweenGap;
//       const resizeWidth = remainingWidth / factor;

//       setResizeWidth(resizeWidth);
//     }, [width]);
//     return (
//       <WrappedComponent
//         {...(props as T)}
//         resizeWidth={resizeWidth}
//         scrollContainerRef={scrollContainerRef}
//       />
//     );
//   };
// }

function withResizer() {
  return <></>;
}

export default withResizer;
