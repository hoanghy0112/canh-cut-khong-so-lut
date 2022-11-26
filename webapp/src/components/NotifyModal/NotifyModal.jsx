import { useEffect, useState } from "react";
import CenteredModal from "../CenteredModal/CenteredModal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./NotifyModal.scss";

export default function NotifyModal({ title, isOpen }) {
	const [isOpenModal, setIsOpenModal] = useState(false);

	useEffect(() => {
		if (isOpen) setIsOpenModal(true);
	}, [isOpen]);

	return (
		<CenteredModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
			<div className="notify-modal">
				<h1>{title}</h1>
				<PrimaryButton onClick={() => setIsOpenModal(false)} title="OK" />
			</div>
		</CenteredModal>
	);
}
