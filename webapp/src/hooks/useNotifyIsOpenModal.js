import { useEffect, useState } from "react";

export default function useNotifyIsOpenModal() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [isOpen]);

	return [isOpen, () => setIsOpen(true)];
}
