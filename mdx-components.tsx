export function useMDXComponents() {
  return {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 style={{ fontSize: '100px' }}>{children}</h1>
    ),
  };
}
