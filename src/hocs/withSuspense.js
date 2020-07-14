/*export function withSuspense(
  BaseComponent,
  ErrorComponent = () => <div>Not found</div>,
  FallbackComponent = () => <div>Loading...</div>,
) {
  function WithSuspense(props) {
    return (
      <ErrorBoundary rootProps={props} ErrorComponent={ErrorComponent}>
          <Suspense fallback={<FallbackComponent/>}>
            <BaseComponent {...props}/>
          </Suspense>
      </ErrorBoundary>
    )
  }
  return WithSuspense;
}*/
