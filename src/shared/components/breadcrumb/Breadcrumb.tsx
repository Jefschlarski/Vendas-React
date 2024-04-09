import { Breadcrumb as AntdBreadcrumb } from 'antd';

export interface BreadcrumbItem {
  title: string
  href?: string
}
interface BreadcrumbProps {
    breadcrumbItems: BreadcrumbItem[]
}

const Breadcrumb = ({ breadcrumbItems }: BreadcrumbProps) => {
  return (
  <AntdBreadcrumb
    items={breadcrumbItems.map((item) => ({
        key: item.title, 
        title: item.title,
        href: item.href,
    }))}
  />)
};

export default Breadcrumb;