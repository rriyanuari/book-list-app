import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { DataGrid, GridColumn, LinkButton } from "rc-easyui";

const Users = () => {
  const [total, setTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _loadPage(pageNumber, pageSize);
    console.log(data);
  }, []);

  const _loadPage = (pageNumber, pageSize) => {
    setLoading(true);
    setTimeout(() => {
      let result = _getData(pageNumber, pageSize);

      setTotal(result.total),
        setPageNumber(result.pageNumber),
        setPageSize(result.pageSize),
        setData(result.rows),
        setLoading(false);
    }, 1000);
  };

  const _getData = (pageNumber, pageSize) => {
    let total = 100000;
    let data = [];
    let start = (pageNumber - 1) * pageSize;
    for (let i = start + 1; i <= start + pageSize; i++) {
      let amount = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 1000);
      data.push({
        inv: "Inv No " + i,
        name: "Name " + i,
        amount: amount,
        price: price,
        cost: amount * price,
        note: "Note " + i,
      });
    }
    return {
      total: total,
      pageNumber: pageNumber,
      pageSize: pageSize,
      rows: data,
    };
  };

  const _handlePageChange = (event) => {
    _loadPage(event.pageNumber, event.pageSize);
  };

  return (
    <>
      <Navbar />
      <div className="my-3 container">
        <h3>Data Users</h3>

        <div style={{ marginBottom: "20px" }}>
          <LinkButton iconCls="icon-add" className="mx-1">
            Add
          </LinkButton>
          <LinkButton iconCls="icon-remove" className="mx-1">
            Remove
          </LinkButton>
          <LinkButton iconCls="icon-save" className="mx-1">
            Save
          </LinkButton>
          <LinkButton iconCls="icon-cut" disabled className="mx-1">
            Cut
          </LinkButton>
        </div>

        <DataGrid
          style={{ height: `50vh` }}
          pagination
          lazy
          multiSort
          data={data}
          total={total}
          pageNumber={pageNumber}
          pageSize={pageSize}
          loading={loading}
          onPageChange={_handlePageChange}
        >
          <GridColumn field="inv" title="Inv No" />
          <GridColumn field="name" title="Name" />
          <GridColumn field="amount" title="Amount" align="right" />
          <GridColumn field="price" title="Price" align="right" />
          <GridColumn field="cost" title="Cost" align="right" />
          <GridColumn field="note" title="Note" />
        </DataGrid>
      </div>
      <Footer />
    </>
  );
};

export default Users;
