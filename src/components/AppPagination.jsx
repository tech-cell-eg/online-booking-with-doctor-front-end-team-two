import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
function AppPagination(props) {
  const {prev, next} = props
  return (
    <Pagination className="">
      <PaginationContent className="my-8 border border-blue-500 rounded-lg px-4 py-1">
        <PaginationItem>
          <PaginationPrevious onClick={()=>console.log("dd")}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink to="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis/>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext to={next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default AppPagination;
