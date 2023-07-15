import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import TemplateCert from "../templateCert/templateCert";
import CertCreator from "../certCreator/certCreator";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { templateApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import { useTranslation } from "react-i18next";
import { FaClipboardList } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {getOrderlistAPi,retryCertApi} from '../../../Scripts/apiCalls'
const Education = ({
	setView,
	certData,
	setCertData,
	category,
	setCategory,
}) => {
	const user = useContext(UserContext);
	const [isSidebar, setIsSidebar] = useState(true);
	const [isTemplateCreator, setIsTemplateCreator] = useState(false);
	const [selectedTemplate, setSelectedTemplate] = useState(certData);
	const { t } = useTranslation();
	const [orderList, setOrderList] = useState([[]]);
	const [orderIndex, setOrderIndex] = useState(0);
	const [lengthOrderList,setLengthOrderList] = useState(0)
	const [refresh,setResfresh] = useState(true)
	const [loading,setloading] = useState(false)
	const [selectedOption, setSelectedOption] = useState("Pending");
	useEffect(() => {
		setloading(true)
		getOrderlistAPi(
			{user_address: user.userAccount}
		).then((res) => {
			console.log("-------------------Get Order--------------------",res);
			setOrderList(res)
			let length = res.length;
			length === 0 ? setLengthOrderList(0) :setLengthOrderList(length)
			length !== 0 && setOrderIndex(length-1)
			setloading(false)

		  })
		  .catch((err) => {
			console.log(err);
	
		  });

		
	}, [category,refresh]);




	const navbuttons = [
		{
			text: "Degree Certificates",
			logo: (
				<div>
					<WebIcon />
				</div>
			),
			category: "educational certificates",
		},
		{
			text: "Diploma Certificates",
			logo: (
				<div>
					<WorkspacePremiumIcon />
				</div>
			),
			category: "non educational certificates",
		},
		{
			text: "Orders",
			logo: (
				<div style={{ fontSize: "1.3rem" }}>
					<FaClipboardList />
				</div>
			),
			category: "orders",
		},
		// {
		//   text: "Certificates (Non Educational)",
		//   logo: (
		//     <div>
		//       <SportsHandballIcon />
		//       <WebIcon />
		//     </div>
		//   ),
		//   category: "non educational certificates",
		// },
		// {
		//   text: "Badges (Non Educational)",
		//   logo: (
		//     <div>
		//       <SportsHandballIcon />
		//       <WorkspacePremiumIcon />
		//     </div>
		//   ),
		//   category: "non educational badges",
		// },
		// {
		//   text: "Others",
		//   logo: <MoreHorizIcon />,
		//   category: "others",
		// },
	];

	const Sidebar = () => {
		const sidebarWidth = window.innerWidth > 800 ? "500px" : "250px";
		return (
			<div
				style={{
					display: "flex",
					position: "relative",
					height: "100%",
				}}>
				<div
					style={{
						width: "50px",
						backgroundColor: "var(--darkshade2)",
					}}>
					{navbuttons.map((nav) => (
						<div
							className="educationnavbutton"
							style={{
								height: "60px",
								width: "50px",
								minWidth: "50px",
								maxWidth: "50px",
							}}
							key={"education-sector-nav-button-" + nav["text"]}
							onClick={() => setCategory(nav["category"])}>
							<Tooltip
								title={nav["text"]}
								placement="right-start">
								{nav["logo"]}
							</Tooltip>
						</div>
					))}
				</div>
				<div
					className="educationsectorsidebar"
					style={{
						backgroundColor: "var(--darkshade1)",
						height: window.innerHeight - 50 + "px",
						width: isSidebar ? sidebarWidth : "0px",
						overflowY: "scroll",
					}}>
					{category !== "orders" && (
						<div
							style={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "10px",
							}}>
							<button
								onClick={() => {
									setIsTemplateCreator(true);
									setIsSidebar(false);
								}}>
								{t(
									"Institutions.education.createCustomTemplate"
								)}
							</button>
						</div>
					)}

					<div
						className="educationnavbutton"
						style={{
							width: "50px",
							height: "50px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "absolute",
							top: "0px",
							right: "-50px",
							backgroundColor: "var(--darkshade1)",
							zIndex: 1,
						}}
						onClick={() => setIsSidebar(!isSidebar)}>
						{isSidebar ? "<" : ">"}
					</div>
					{category !== "orders" ? (
						<>
							<TemplateContainer subscription="user" />
							<TemplateContainer subscription="free" />
							<TemplateContainer subscription="premium" />
						</>
					) : (
						<>
						<div>
							<h4>Recent Order</h4>
							<hr/>
							
							{
							!loading ? (lengthOrderList !==0 ?<div className="orders-container">
									{orderList[lengthOrderList-1].length !==0 &&<div
										onClick={() => setOrderIndex(lengthOrderList-1)}
										className={`${
											orderIndex === lengthOrderList-1 &&
											"activeOrder"
										} orders`}>
										Order {lengthOrderList}
									</div>}
							</div>:<><h4>You don't have any Order</h4></>)
							:
							<h4>loading.....</h4>
							}
									
						</div>
						<h4>Order List</h4>
						<hr/>
						{ !loading ?
						<div className="orders-container">
							{orderList.map((order, index) => {
								return (
									order.length!==0 && <div
										key={index}
										onClick={() => setOrderIndex(index)}
										className={`${
											orderIndex === index &&
											"activeOrder"
										} orders`}>
										Order {index+1}
									</div>
								);
							})}
						</div>:
						<h4>Loading.....</h4>
						}
						</>
					)}
				</div>
				
			</div>
		);
	};

	const TemplateContainer = ({ subscription }) => {
		const [templates, setTemplates] = useState([]);
		const [startIndex, setStartIndex] = useState(0);

		const deleteTemplate = async (template) => {
			setTemplates((prev) => {
				let index = prev.indexOf(template);
				prev.splice(index, 1);
				return prev;
			});

			templateApi({
				request_type: "delete",
				account: user.userAccount,
				id: template.id,
			})
				.then((res) => {})
				.catch((err) => {
					console.log(err);
				});
		};

		const heading =
			subscription === "user"
				? t("Institutions.education.headingRecentlyUsed")
				: subscription === "free"
				? t("Institutions.education.headingFreeTemplates")
				: t("Institutions.education.headingPremiumTemplates");

		useEffect(() => {
			templateApi({
				request_type: "read",
				account: user.userAccount,
				from_index: startIndex,
				to_index: startIndex + 6,
				sector: "education",
				category: category,
				subscription: subscription,
			})
				.then((res) => {
					console.log("---------------------------------------");
					console.log(res);
					setTemplates([...templates, ...res]);
				})
				.catch((err) => {
					console.log(err);
				});
		}, [startIndex]);

		return (
			<>
				<div
					style={{
						borderBottom: "1px solid white",
						padding: "10px",
					}}>
					{heading}
				</div>
				<div
					style={{
						padding: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "10px",
					}}>
					{templates.map((template) => (
						<div
							key={template.id + "template-sidebar-template"}
							onClick={() => {
								setSelectedTemplate(template);
								setIsTemplateCreator(false);
								setCertData(template);
							}}
							className="templateselector"
							style={{ position: "relative" }}>
							<img
								src={template.base_image}
								alt="Template"
								width="150px"
							/>
							{subscription === "user" && (
								<div
									style={{
										position: "absolute",
										bottom: "0px",
										right: "0px",
										background: "black",
										width: "20px",
										height: "30px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}>
									<DeleteIcon
										color="primary"
										onClick={() => deleteTemplate(template)}
									/>
								</div>
							)}
						</div>
					))}
				</div>
				<div
					style={{
						padding: "10px",
					}}>
					<button
						style={{ padding: "5px" }}
						onClick={() => setStartIndex((prev) => prev + 6)}>
						{t("Institutions.education.more")}...
					</button>
				</div>
			</>
		);
	};

	const MainPage = () => {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start",
					height: window.innerHeight - 50 + "px",
					overflowY: "scroll",
				}}
				className="educationmainpage">
				{category === "orders" ? (
					<OrdersList list={orderList[orderIndex]} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
				) : (
					<TemplateCreator />
				)}
			</div>
		);
	};

	const OrdersList = ({ list,selectedOption, setSelectedOption}) => {
		// Filter for Pending orders
		const pendingOrders = list.filter((order) => order.status === "Pending");
	  
		// Filter for Issued orders
		const issuedOrders = list.filter((order) => order.status === "Issued");
	  
		// Filter for Failed orders
		const failedOrders = list.filter((order) => order.status === "Failed");
		// const [selectedOption, setSelectedOption] = useState("Pending");
		function retryCert(list){
			console.log(list)
			if (list.length===0){
				alert("You don't have Failed Certificate")
			}else{
				alert("Order Submitted Again")
				retryCertApi({
					certificate_list:JSON.stringify(list)
				}).then((res) => {
					console.log("-------------------Minted--------------------",res);
					alert("Minting Started Please Wait")
				  })
				  .catch((err) => {
					console.log(err);
					// alert("Something went wrong again")
				  });

			}
		}

		const handleOptionChange = (event) => {
			setSelectedOption(event.target.value);
		};
	  
		return (
		  <>
			<h1>{t("Institutions.education.orders.RecipientList")}</h1>
			<div className="listHeader">
				<div>
					<select value={selectedOption} onChange={handleOptionChange}>
						<option value="Pending">{t("Institutions.education.orders.pending")}</option>
						<option value="Issued">{t("Institutions.education.orders.issued")}</option>
						<option value="Failed">{t("Institutions.education.orders.failed")}</option>
					</select>
				</div>

				<div style={{
					display:"flex"
				}}>
				<div >
					<button
					onClick={
						()=> {
							setResfresh(!refresh)
						}
					}
					>
						{t("Institutions.education.orders.refresh")}
					</button>
				</div>

				{
					selectedOption==="Failed"&&
					<div style={{
						marginLeft:"10px"
					}}>
						<button
						onClick={
							()=>{
								retryCert(failedOrders)
							}
						}	
						>
							{t("Institutions.education.orders.retry")}
						</button>
					</div>
				}
				</div>
			</div>
			<table className="orderlist-container">
			  <thead>
				<tr className="orderlist">
				  <th>S.no</th>
				  <th>User</th>
				  <th>Token Id</th>
				  <th>{t("Dashboard.contentDashboard.Status")}</th>
				  <th>NFT</th>
				</tr>
			  </thead>
			  <tbody>
				{/* Display Pending orders */}

				{selectedOption ==="Pending" && 
				(pendingOrders.length !==0 ?
				pendingOrders.map((order, index) => {
				  return (
					<tr className="orderlist" key={order.id}>
					  <td>{index + 1}</td>
					  <td>{order.recipient}</td>
					  <td>{order.token_id}</td>
					  <td>{order.status}</td>
					  <td>
						<a href={order.image} className="orderlist-nftlink" target="_blank">
						  <FiExternalLink />
						</a>
					  </td>
					</tr>
				  );
				}):<h4>{t("Institutions.education.orders.No_certificate_found")}</h4>)
			}
	  
				{/* Display Issued orders */}
				{selectedOption ==="Issued" && 
				(issuedOrders.length !==0 ?
				issuedOrders.map((order, index) => {
				  return (
					<tr className="orderlist" key={order.id}>
					  <td>{index + 1}</td>
					  <td>{order.recipient}</td>
					  <td>{order.token_id}</td>
					  <td>{order.status}</td>
					  <td>
						<a href={order.image} className="orderlist-nftlink" target="_blank">
						  <FiExternalLink />
						</a>
					  </td>
					</tr>
				  );
				}):<h4>{t("Institutions.education.orders.No_certificate_found")}</h4>)
			}
	  
				{/* Display Failed orders */}
				{selectedOption ==="Failed" && 
				(failedOrders.length !==0 ?
				failedOrders.map((order, index) => {
				  return (
					<tr className="orderlist" key={order.id}>
					  <td>{index + 1}</td>
					  <td>{order.recipient}</td>
					  <td>{order.token_id}</td>
					  <td>{order.status}</td>
					  <td>
						<a href={order.image} className="orderlist-nftlink" target="_blank">
						  <FiExternalLink />
						</a>
					  </td>
					</tr>
				  );
				}):<h4>{t("Institutions.education.orders.No_certificate_found")}</h4>)
			}
			  </tbody>
			</table>
		  </>
		);
	  };
	  
	  
	  
	const TemplateCreator = () => {
		return (
			<>
				{isTemplateCreator ? (
					<CertCreator
						setIsTemplateCreator={setIsTemplateCreator}
						setSelectedTemplate={setSelectedTemplate}
						sector="education"
					/>
				) : (
					<>
						{selectedTemplate === null ? (
							<div
								style={{
									marginTop: "50px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									textAlign: "center",
								}}>
								<h2>
									{t("Institutions.education.selectTemplate")}
								</h2>
								<h3>
									{" "}
									{"<< "}
									{t(
										"Institutions.education.selectTemplatePlaceholder"
									)}{" "}
								</h3>
								<h3>{t("Institutions.education.or")}</h3>
								<button
									onClick={() => {
										setIsTemplateCreator(true);
										setIsSidebar(false);
									}}>
									{t(
										"Institutions.education.createCustomTemplate"
									)}
								</button>
							</div>
						) : (
							<TemplateCert
								templateData={selectedTemplate}
								setView={setView}
								setCertData={setCertData}
							/>
						)}
					</>
				)}
			</>
		);
	};
	return (
		<div className="educationSector">
			<div
				style={{
					display: "flex",
					width: "100%",
				}}>
				<Sidebar />
				<MainPage />
			</div>
		</div>
	);
};

export default Education;
