import React, { useState } from "react";

function Header({ onSort }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s"
        height="60"
        width="60"
        alt="logo"
        style={styles.logo}
      />

      <div style={styles.navButtons}>
        {["Men", "Women", "Kids", "Home and Living", "Beauty", "Studio"].map((item, i) => (
          <button key={i} style={styles.navBtn}>{item}</button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        style={styles.search}
      />

      <div style={styles.profileSection}>
        <button style={styles.profileBtn}>Profile</button>
        <button style={styles.profileBtn}>Wishlist</button>
        <button style={styles.profileBtn}>Bag</button>

        <div style={styles.dropdownWrapper}>
          <button style={styles.profileBtn} onClick={toggleDropdown}>
            Filter ⬇
          </button>
          {showDropdown && (
            <div style={styles.dropdownContent}>
              <button
                style={styles.dropdownItem}
                onClick={() => {
                  onSort("low");
                  setShowDropdown(false);
                }}
              >
                Price: Low to High
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => {
                  onSort("high");
                  setShowDropdown(false);
                }}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  logo: {
    marginRight: "15px",
  },
  navButtons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  navBtn: {
    background: "none",
    border: "none",
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#333",
  },
  search: {
    flex: "1 1 300px",
    maxWidth: "400px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    margin: "10px",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "relative",
  },
  profileBtn: {
    padding: "6px 10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f4f4f4",
    cursor: "pointer",
  },
  dropdownWrapper: {
    position: "relative",
  },
  dropdownContent: {
    position: "absolute",
    top: "40px",
    right: "0",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "4px",
    zIndex: 10,
    width: "160px",
  },
  dropdownItem: {
    width: "100%",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#fff",
    border: "none",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Header;
