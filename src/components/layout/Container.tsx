
interface IContainer {
  children: React.ReactNode;
  container?: string;
  inner?: string;
}
const Container: React.FC<IContainer> = ({ children,container, inner }) => {
  return (
    <div className={`${container} container`}>
      <div className={`${inner} inner`}>
        {children}
      </div>
    </div>
  );
};

export default Container