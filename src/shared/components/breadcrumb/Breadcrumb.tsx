import { Breadcrumb as BcAntd} from 'antd';
import { useNavigate } from 'react-router-dom';

export interface BreadcrumbItem {
    name: string
    url?: string
}
interface BreadcrumbProps {
    breadcrumbItems: BreadcrumbItem[]
}

const Breadcrumb = ({ breadcrumbItems }: BreadcrumbProps) => {
    const navigate = useNavigate();

    const handleClick = (url: string) => {
        navigate(url);
    }

  return (
  <BcAntd>
    {breadcrumbItems.map((breadcrumb) => (
      <BcAntd.Item key={breadcrumb.url}>
       {breadcrumb.url ? <a onClick={() => handleClick(breadcrumb.url!)}>{breadcrumb.name}</a>: <b>{breadcrumb.name}</b>}
      </BcAntd.Item>
    ))}
  </BcAntd>)
};

export default Breadcrumb;