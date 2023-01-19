import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { DsNhomChiTietLoai, MenuJob, getCategoryApi } from "../../redux/reducers/jobReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/configStore";


type Props = {
};

const JobCategory = (props: Props) => {

    const { arrCategoryJob } = useSelector(
      (state: RootState) => state.jobReducer
    );
    console.log(arrCategoryJob);
    const dispatch = useDispatch();

    useEffect(() => {
      const actionAsync: any = getCategoryApi();
      dispatch(actionAsync);
    }, []);

    
    
  return (
    <div className="category">
      <div className="category_banner">
        <img src="./img/category_banner.jpg" alt="" />
      </div>
      <div className="container category_card">
        <div className="row">
          <div className="col-4">
            {arrCategoryJob?.map(
              (category: DsNhomChiTietLoai, i: number) => {
                return (
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={category.hinhAnh}
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{category.tenNhom}</h4>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
