type withServerComp = {
  data: any;
  displayName?: string;
};

/**
 *
 * @todo since fn can throw error , we need to handle it in the component but for now it will propagate to nearest error boundary
 */
function WithServerComponent<T extends withServerComp>(
  WrappedComponent: React.ComponentType<T>,
  fn: (id?: string, extra?: any) => Promise<any>,
) {
  return async function C(
    props: Omit<T, keyof withServerComp> & { id?: string; extra?: any },
  ) {
    const data = await fn(props?.id, props?.extra);

    return <WrappedComponent {...(props as T)} data={data} />;
  };
}

WithServerComponent.displayName = 'WithServerComponent';

export default WithServerComponent;
